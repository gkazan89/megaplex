class Api::TicketsController < ApplicationController
  def index
    @tickets = Ticket.all
    render "index.json.jbuilder"
  end

  def show
    @ticket = Ticket.find_by(id: params[:id])
    render "show.json.jbuilder"
  end

  def create
    @ticket = Ticket.new(
      name: params[:name],
      email: params[:email],
      credit_card: params[:credit_card],
      expiration_date: params[:expiration_date],
      showtime_id: params[:showtime_id]
      )
    @ticket.save
    render "show.json.jbuilder"
  end

end
