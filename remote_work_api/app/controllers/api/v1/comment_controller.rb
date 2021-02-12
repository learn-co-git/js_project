class Api::V1::CommentController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments, status: 200
  end

  def show
    @comments = Comment.all.map {|ele| ele if ele.office_id == params["office_id"]}
    render json: @comments, status: 200
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
    params.require(:comment).permit(:statement, :user_name, :office_id)
  end
end
