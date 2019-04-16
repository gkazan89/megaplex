class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.string :name
      t.string :email
      t.integer :credit_card
      t.date :expiration_date
      t.integer :showtime_id

      t.timestamps
    end
  end
end
