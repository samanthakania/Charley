# frozen_string_literal: true

class AddListIdToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :list_id, :integer
    add_index :todos, :list_id
  end
end
