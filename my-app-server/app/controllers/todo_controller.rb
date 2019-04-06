# frozen_string_literal: true

class TodoController < ApplicationController
  def create_todo
    id = params[:list_id]
    @list = List.create( trip_id: id)
    render json: @list.id 
  end
  def add_todo
        todos = params[:todos]
        id = params[:list_id]
        @list = List.find(id) 
        @list.todos.create(  
            todo_item: params[:todos][:text],
            is_completed: params[:todos][:isCompleted]
            )
     
        render json: @list.todos.order(:id)
  end
  def update_todo
       text = params[:todos][:text]
       update = params[:todos][:isCompleted]
       id = params[:list_id]
       @list = List.find(id) 
      @todo = @list.todos.find_by( todo_item: text)
      @todo.update(is_completed: text)
     render json: @list.todos.order(:id)
  end
  def destroy_todo
       text = params[:todos][:text]
       id = params[:list_id]
       @list = List.find(id) 
      @todo = @list.todos.find_by( todo_item: text)
      @todo.destroy
       render json: @list.todos.order(:id)
  end
end
