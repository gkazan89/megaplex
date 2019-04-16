class Api::TheatersController < ApplicationController
  def index
    @theaters = Theater.all
    render "index.json.jbuilder"
  end

  def create
    @theater = Theater.new(
      capacity: params[:capacity]
      )
    @theater.save
    render "show.json.jbuilder"
  end

  def destroy
    @theater = Theater.find_by(id: params[:id])
    @theater.destroy
    render json: {message: "Theater destroyed"}
  end

end
