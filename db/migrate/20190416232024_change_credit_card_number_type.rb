class ChangeCreditCardNumberType < ActiveRecord::Migration[5.2]
  def change
    change_column :tickets, :credit_card, :integer, limit: 8
  end
end
