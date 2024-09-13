const Markdown = ({classes, content}) => {
    return(
        <div 
            className={classes}
            dangerouslySetInnerHTML={content}
        >
        </div>
    );
}

export default Markdown;