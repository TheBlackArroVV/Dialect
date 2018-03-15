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
end
