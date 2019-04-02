
class CreateMaps < ActiveRecord::Migration[5.2]
  def change
    create_table :maps do |t|
      t.references :park, foreign_key: true
      t.decimal :start
      t.decimal :end
      t.integer :likes
      t.string :trip_id

      t.timestamps
    end
  end
end

