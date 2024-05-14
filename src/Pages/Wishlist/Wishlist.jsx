import { useLoaderData } from "react-router-dom";
import SingleWishlist from "../../Components/SingleWishlist";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const allWishlist = useLoaderData();
  const currentUserEmail = user.email;
  const currentList = allWishlist.filter(
    (item) => item.email === currentUserEmail
  );
  console.log(currentList);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
      {currentList.map((wishlist) => (
        <SingleWishlist key={wishlist._id} wishlist={wishlist}></SingleWishlist>
      ))}
    </div>
  );
};

export default Wishlist;
