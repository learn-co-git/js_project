class Api::V1::OfficeController < ApplicationController

  def index
    @offices = Office.all
    render json: @offices, status: 200
  end

  def show
    @office = Office.find_by_id(params[:id])
  end

  def create
    @office = Office.new(office_params)
    if @office.save
      render json: @office
    else
      render json: {message: "Failed to create office"}
    end
  end

  def destroy
    @office = Office.find_by_id(params[:id])
    if @office.delete
      render json: {message: "office deleted"}
    end
  end

  private

  def office_params
    params.require(:office).permit(:location, :cell, :bathrooms, :peace_index, :description)
  end
end
