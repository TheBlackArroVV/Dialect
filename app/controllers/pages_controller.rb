class PagesController < ApplicationController
  def index
    @news = Post.where(category_id: 1).last(3)
    @articles = Post.where(category_id: 2).last(3)
  end

  def map
    if params[:pages]
      @words = Word.where(official_word: params[:pages][:word])
    end
  end

  def about_us
  end

  def search
    if !params[:search].nil?
      @users = User.where(email: params[:search][:search_text]) + User.where(name: params[:search][:search_text]) + User.where(surname: params[:search][:search_text])
      @posts = Post.where(article: params[:search][:search_text])
      @words = Word.where(official_word: params[:search][:search_text]) + Word.where(dialect_word: params[:search][:search_text])
    end
  end
end
