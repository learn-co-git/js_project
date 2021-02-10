class CommentController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments, status: 200
  end

  def show
    @comment = Comment.find_by_id(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment, status: 200
    else
      render json: {message: "Failed to create comment"}
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:office_id, :statement, :user_name)
  end
end
