class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :trip_id
      t.integer :route_id
      t.string :list_items

      t.timestamps
    end
  end
end
