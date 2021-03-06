import styles from "../../styles/Post.module.css";
import PostContent from "../../components/PostContent";
import { firestore, getUserWithUsername, postToJSON } from "../../lib/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

export async function getStaticProps({ params }) {
  const { username, slug } = params;
  const userDoc = await getUserWithUsername(username);

  let post;
  let path;

  if (userDoc && slug) {
    const postRef = userDoc.ref.collection("posts").doc(slug);
    console.log("postRef", await postRef.get());

    post = postToJSON(await postRef.get());

    path = postRef.path;
  }

  return {
    props: { post: post || null, path: path || null },
    revalidate: 5000,
  };
}

export async function getStaticPaths() {
  // Improve my using Admin SDK to select empty docs
  const snapshot = await firestore.collectionGroup("posts").get();

  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data();
    return {
      params: { username, slug },
    };
  });

  return {
    // must be in this format:
    // paths: [
    //   { params: { username, slug }}
    // ],
    paths,
    fallback: "blocking",
  };
}

export default function Post(props) {
  const postRef = props.path && firestore.doc(props.path);
  const [realtimePost] = useDocumentData(postRef as any);

  const post = realtimePost || props.post;

  return (
    <main className={styles.container}>
      <section>{post && <PostContent post={post} />}</section>

      <aside className="card">
        <p>
          <strong>{post?.heartCount || 0} 🤍</strong>
        </p>
      </aside>
    </main>
  );
}
