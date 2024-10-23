import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks ,readingdtime}) => {
    
    return (
        <div className="md:w-1/3 ">
            <div className="bg-gray-300 px-5 py-8 my-5 rounded-xl">
               
            <h2 className="text-3xl font-bold bg-orange-200 rounded-xl p-5 mb-5 text-center">Reading times {readingdtime}</h2>
            <h2 className="text-3xl font-bold text-center">Booksmark Blogs {bookmarks.length}</h2>
            {
               bookmarks.map( bookmark => <Bookmark
                key={bookmark.id}
                 bookmark={bookmark}
                 ></Bookmark>)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks:PropTypes.array.isRequired,
    readingdtime:PropTypes.number.isRequired
}

export default Bookmarks;