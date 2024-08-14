

const Blog = async () => {

    await new Promise((resolve) => {
        setTimeout(resolve, 2000)
    })

    return (
        <div>
            Blog
        </div>
    );
};

export default Blog;
