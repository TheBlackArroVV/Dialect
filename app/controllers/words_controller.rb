class WordsController < ApplicationController
  def index
    @words = Word.all
  end

  def new
  end

  def create
    @city = City.where(city: params.values[0])
    @word = Word.new
    @word.city_id = 1
    @word.official_word = params.values[1]
    @word.dialect_word = params.values[2]
    if @word.save
      redirect_to '/words'
    else
      redirect_to '/words/new'
    end
  end

  def find_region
    @districts = City.where(region: params.keys[0])
    @districts = @districts.map { |e| e.district  }

    respond_to do |format|
      format.json { render json: @districts }
    end
  end

  def find_district
    @cities = City.where(district: params.keys[0])
    @cities = @cities.map { |e| e.city  }

    respond_to do |format|
      format.json { render json: @cities }
    end
  end

  private
    def word_params
      params.require(:word).permit(:official_word, :dialect_word, :city_id)
    end
end
