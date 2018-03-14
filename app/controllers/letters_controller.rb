class LettersController < ApplicationController
  def index
  end

  def create
    @letter = Letter.new(letter_params)
    if @letter.save
      redirect_to root_path
    else
      render '/index'
    end
  end

  private

  def letter_params
    params.require(:letter).permit(:name, :email, :phone, :body)
  end
end
