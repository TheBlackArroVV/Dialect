class WordsController < ApplicationController
  def index
    @words = Word.all
  end

  def new
  end

  def create
    pp params[:word][:city_id] = params[:city_id]
    pp @word = Word.new(word_params)
    if @word.save
      redirect_to '/words'
    else
      redirect_to '/words/new'
    end
  end

  private
    def word_params
      params.require(:word).permit(:official_word, :dialect_word, :city_id)
    end
end
