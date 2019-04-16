class Api::ShowtimesController < ApplicationController
  def index
    @showtimes = Showtime.all
    render "index.json.jbuilder"
  end

  def create
    @showtime = Showtime.new(
      movie_id: params[:movie_id],
      theater_id: params[:theater_id],
      time: params[:time]
      )
    @showtime.save
    render "show.json.jbuilder"
  end

  def update
    @showtime = Showtime.find_by(id: params[:id])
    @showtime.movie_id = params[:movie_id] || @showtime.movie_id
    @showtime.theater_id = params[:theater_id] || @showtime.theater_id
    @showtime.time = params[:time] || @showtime.time
    @showtime.save
    render "show.json.jbuilder"
  end

  def delete
    @showtime = Showtime.find_by(id: params[:id])
    @showtime.destroy
    render json: {message: "Showtime deleted"}
  end


end
