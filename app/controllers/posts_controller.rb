class PostsController < ApplicationController
  before_action :find_post, only: [:destroy, :edit, :update, :show]

  def news
    @news = Post.where(category_id: 1)
  end

  def articles
    @articles = Post.where(category_id: 2)
  end

  def new
  end

  def create
    params[:post][:user_id] = current_user.id
    params[:post][:category_id] = params[:category_id]
    @post = Post.new(post_params)
    pp @post
    if @post.save
      if params[:images]
        params[:images].each do |photo|
          @files = @post.attachments.create(photo: photo)
        end
      end
      redirect_to root_path
    else
      render '/posts/new'
    end
  end

  def edit
  end

  def update
    params[:post][:category_id] = params[:category_id]
    @post.update(post_params)
    redirect_to root_path
  end

  def show
    @photos = @post.attachments
  end

  def destroy
    @post.destroy
    redirect_to '/news'
  end

  private

  def attachment_params
    params.require(:attachments).permit(:post_id, :photo)
  end

  def post_params
    params.require(:post).permit(:article, :body, :category_id, :mainphoto, :user_id)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
