class CommentDTO{
    constructor(comment){
        this._id=comment._id;
        this.createdAt=comment.createdAt;
        this.content=comment.content;
        this.authorUsername=comment.authorUsername;
    }
}

module.exports=CommentDTO;