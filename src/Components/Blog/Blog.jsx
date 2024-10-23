import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    return (
        <div>
            <h1 className="font-bold text-3xl">blogs length : {blog.length}</h1>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.array.isRequired
}
export default Blog;