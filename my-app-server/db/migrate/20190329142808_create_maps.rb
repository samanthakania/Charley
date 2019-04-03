
class CreateMaps < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :tripid
      t.string :email
      
      t.timestamps
    end
  end
end

