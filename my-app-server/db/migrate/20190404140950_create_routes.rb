class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :origin
      t.string :destination
      t.integer :park_id
      t.integer :trip_id
      t.integer :list_id

      t.timestamps
    end
  end
end
