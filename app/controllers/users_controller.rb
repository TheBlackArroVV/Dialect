class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def profile
    @posts = current_user.posts
  end

  def show
    @user = User.find(params[:id])
  end
end
