import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="p-4 m-4  bg-slate-100 rounded-xl">
            <h3 className="text-2xl font-bold">{title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;