class RegistrationsController < Devise::RegistrationsController

  private

  def sign_up_params
    params.require(:user).permit(:name, :surname, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:name, :surname, :birthdate, :city, :country, :avatar, :activity, :education, :university, :postition, :degree, :about, :sex, :password, :password_confirmation, :current_password)
  end
end
