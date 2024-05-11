const SingleComment = ({ singleComment }) => {
  const { Comment, displayName, owner_photo } = singleComment;
  return (
    <div className="flex justify-center gap-5">
      <div className="w-14 h-12">
        <img className="rounded-full" src={owner_photo} alt="" />
      </div>
      <div className="bg-slate-100 px-5 py-2 w-full rounded-md">
        <h2 className="text-lg font-semibold">{displayName}</h2>
        <p className="text-sm">{Comment}</p>
      </div>
    </div>
  );
};

export default SingleComment;
