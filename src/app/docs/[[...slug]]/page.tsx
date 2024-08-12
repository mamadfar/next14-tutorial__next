
const Docs = ({params}: {
    params: {
        slug: string[];
    };
}) => {
    //? If we don't wanna show the docs home page, we need to remove first [] of the [[...slug]] in the file name, like: [...slug]
    if (params.slug?.length === 2) {
        return (
            <div>
                <h1>Docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
            </div>
        );
    } else if (params.slug?.length === 1) {
        return (
            <div>
                <h1>Viewing docs for feature {params.slug[0]}</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>Docs home page</h1>
        </div>
    );
};

export default Docs;
