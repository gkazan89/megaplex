class CreateShowtimes < ActiveRecord::Migration[5.2]
  def change
    create_table :showtimes do |t|
      t.integer :movie_id
      t.integer :theater_id
      t.time :time

      t.timestamps
    end
  end
end
