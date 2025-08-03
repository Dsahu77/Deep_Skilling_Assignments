import React from 'react';

const blogs = [
    { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' }
];

const BlogDetails = () => {
    return (
        <div>
            <h1>Blog Details</h1>
            {blogs.map(blog => (
                <div key={blog.id} className="item-details">
                    <h2>{blog.title}</h2>
                    <h3>{blog.author}</h3>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogDetails;
