class MessagesController < ApplicationController
  def index
  end
  
  def create
  end 
  
  def show
  end
  
  def edit
  end
  
  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end

