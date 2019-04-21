class Showtime < ApplicationRecord
  belongs_to :theater
  belongs_to :movie
  has_many :tickets

  def status
    capacity = self.theater.capacity
    tix = self.tickets.length
    if tix >= capacity
      status = {sold_out?: true}
    else
      status = {sold_out?: false}
    end
  end
end
