class PagesController < ApplicationController
  def index
  end

  def map
    if params[:pages]
      @words = Word.where(official_word: params[:pages][:word])
    end
  end

  def about_us
  end
end
