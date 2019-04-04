
class CreateMaps < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :trip_id
      t.string :email
      t.integer :park_id
      t.timestamps
    end
  end
end

