import Image from "next/image";
export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      {user?.photoURL && (
        <div className="card-img-center">
          <Image
            src={user?.photoURL || "/hacker.png"}
            className=""
            alt=""
            width={150}
            height={150}
            layout="fixed"
          />
        </div>
      )}
      <p>
        <i>@{user?.username}</i>
      </p>
      <h1>{user?.displayName || "Anonymous User"}</h1>
    </div>
  );
}
