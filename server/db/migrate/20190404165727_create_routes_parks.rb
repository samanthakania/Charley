class CreateRoutesParks < ActiveRecord::Migration[5.2]
  def up
    create_table :parks_routes do |t|
      t.integer :route_id
      t.integer :park_id
    end
  
  end
  def down 
  drop_table 'routes_parks'
  end
end
