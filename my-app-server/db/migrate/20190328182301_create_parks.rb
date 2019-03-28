class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :full_name
      t.string :name
      t.string :country
      t.string :prov_state
      t.decimal :lat
      t.decimal :long
      t.text :description
      t.string :url
      t.integer :established
      t.boolean :unesco

      t.timestamps
    end
  end
end
