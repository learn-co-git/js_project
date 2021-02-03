class Api::V1::UserController < ApplicationController

  def index
    @user = User.all
    render json: @user, status: 200
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: 200
  end

  def create
    @user = User.find_by_email(user_params[:email])
    if @user && @user.authenticate(user_params[:password])
      session[:user_id] = @user.id
      render json: @user, status: 200
    else
    @user = User.new(user_params)
      if @user.save
        session[:user_id] = @user.id
        render json: @user, status: 200
      end
    end
  end

  def destroy
    session.clear
    render json: {userId: @user.id, message: "Logged Out"}
  end

  private

  def user_params
    params.permit(:name, :email, :password)
  end

end
