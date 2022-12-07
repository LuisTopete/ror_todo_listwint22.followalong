class AddPriceToTodos < ActiveRecord::Migration[7.0]
  def change
    add_column :todos, :price, :float
  end
end
