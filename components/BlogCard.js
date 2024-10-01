import React from 'react';
import Link from 'next/link'

const BlogCard = ({ title, author, content, views, readMoreLink, slug }) => {
    return (
        <div style={styles.cardContainer}>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.author}>By: {author}</p>
            <div style={styles.content}>
                
                {content.length > 100 ? `${content.slice(0, 100)}...` : content}
            </div>
            <Link href={"/blogpost/" + {slug} } className='bg-green-500 text-white px-4 py-2 rounded-md inline-block cursor-pointer'>
                Read More
            </Link>

            <p style={styles.views}>Views: {views}</p>
        </div>
    );
};

// Inline styles for the component
const styles = {
    cardContainer: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '86vw',
        margin: '20px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    author: {
        color: '#555',
        fontSize: '16px',
        marginBottom: '10px',
    },
    content: {
        fontSize: '18px',
        marginBottom: '10px',
        color: 'white',
    },
    views: {
        color: '#888',
        fontSize: '14px',
    },
    button: {
        backgroundColor: 'color: rgb(255 255 255 / var(--tw-text-opacity));',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 15px',
        cursor: 'pointer',
        fontSize: '16px', // Ensure text is readable
        whiteSpace: 'nowrap', // Prevent text from wrapping
        display: 'inline-block', // Keep the button size appropriate
        transition: 'background-color 0.3s ease', // Add a transition effect
    },
};



export default BlogCard;
