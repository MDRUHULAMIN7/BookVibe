
import Readbooks from "../../Readbooks/Readbooks";
import Wishlist from "../../Wishlistbooks/Wishlist";


const ListedBook = () => {
    return (
        <div>
            <h1 className="m-4 bg-base-300 text-center text-3xl rounded-xl text-black font-bold py-10">Books</h1>
         
         <div className="mb-24 mt-10 flex items-center justify-center"><details className="dropdown">
  <summary className="m-1 btn bg-green-500 text-white font-bold px-4 py2 text-xl">Sort by</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details></div>
            



<div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Readbooks" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Readbooks></Readbooks></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlistbooks" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Wishlist></Wishlist></div>

  
</div>
        </div>
    );
};

export default ListedBook;