class Ticket < ApplicationRecord
  belongs_to :showtime 
  
  validates :name, presence: true
  validates :email, presence: true

  # credit card must be 16 digits
  validates :credit_card, presence: true
  validates :credit_card, length: { is: 16}

  # expiration date can't be past
  validates :expiration_date, presence: true,
    :if => :expired?

  def expired?
    if expiration_date.present? && expiration_date < Date.today
      errors.add(:expiration_date, "Credit card is expired")
    end
  end


end
