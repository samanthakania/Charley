class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :origin
      t.string :destination
      t.string :trip_id
      t.integer :list_id

      t.timestamps
    end
  end
end
