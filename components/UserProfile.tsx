/* eslint-disable @next/next/no-img-element */
// UI component for user profile
export default function UserProfile({ user }) {
  console.log("user", user);

  return (
    <div className="box-center">
      <img
        src={user?.photoURL || "/hacker.png"}
        className="card-img-center"
        alt=""
      />
      <p>
        <i>@{user?.username}</i>
      </p>
      <h1>{user?.displayName || "Anonymous User"}</h1>
    </div>
  );
}
