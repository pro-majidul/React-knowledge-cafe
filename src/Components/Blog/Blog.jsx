import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handelBookmarks ,handelReadingTime }) => {
    const { hashtags, reading_time, posted_date, author, author_img, cover, title,id } = blog;
    return (
        <div className='mb-20 border-b-2 pb-3'>
            <img className='w-full rounded-xl mb-6' src={cover} alt={`cover image of ${cover}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex gap-10 items-center'>
                    <div className='flex items-center gap-3'>
                        <img className='md:h-16 h-10' src={author_img} alt="" />
                        <div>
                            <h2 className='font-bold md:text-lg'>{author}</h2>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                </div>
                <div className='md:flex items-center md:gap-3'>
                    <p>{reading_time} min read</p>
                    <button
                        className='text-2xl hover:text-blue-900 font-bold text-red-700'
                        onClick={() => handelBookmarks(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h1 className='font-bold md:text-4xl text-2xl my-3 py-2 '>{title}</h1>
            <p className='font-medium text-lg text-gray-500 mb-6'>
                {
                    hashtags.map((hash, i) => <span key={i}><a className='ml-2' href="">#{hash}</a></span>)
                }
            </p>
            <button
                onClick={()=>handelReadingTime(reading_time ,id)}
                className='btn hover:bg-green-400 bg-slate-200 px-2 font-semibold text-gray-600 py-2 rounded-xl'>Mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelBookmarks: PropTypes.func.isRequired,
    handelReadingTime:PropTypes.func.isRequired
}
export default Blog;