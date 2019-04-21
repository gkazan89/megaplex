class Showtime < ApplicationRecord
  belongs_to :theater
  belongs_to :movie
  has_many :tickets

  def sold_out
    capacity = self.theater.capacity
    tix = self.tickets.length
    if tix >= capacity
      sold_out = {status: true}
    else
      sold_out = {status: false}
    end
  end
end
