class CommentsController < ApplicationController
  def create
    params[:comment][:user_id] = current_user.id
    params[:comment][:post_id] = params[:post_id]
    pp params[:comment]
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to post_path(params[:post_id])
    else
      redirect_to post_path(params[:post_id])
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :text)
  end
end
