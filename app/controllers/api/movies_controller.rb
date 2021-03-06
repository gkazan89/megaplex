class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render "index.json.jbuilder"
  end

  def show
    @movie = Movie.find_by(id: params[:id])
    render "show.json.jbuilder"
  end

  def create 
    @movie = Movie.new(
      title: params[:name],
      runtime: params[:runtime]
      )
    @movie.save
    render "show.json.jbuilder"
  end

  def update
    @movie = Movie.find_by(id: params[:id])
    @movie.title = params[:title] || @movie.title
    @movie.runtime = params[:runtime] || @movie.runtime
    @movie.save
    render "show.json.jbuilder"
  end

  def destroy
    @movie = Movie.find_by(id: params[:id])
    @movie.destroy
    render json: {message: "Movie destroyed"}
  end

end
