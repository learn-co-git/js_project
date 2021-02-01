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
    @user = User.new(user_params)
    if user.save
      render json: @user, status: 200
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.delete
    render json: {userId: @user.id}
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
