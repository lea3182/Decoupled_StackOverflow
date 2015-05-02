class QuestionsController < ApplicationController

  def index
      @questions = Question.all
      render json: @questions
  end

  def create
    p "*" *80
    @question = Question.new(title: params[:title], content: params[:content])
    if @question.save
      p "3*" *80
      render json: @question
    else
      render json: @question.errors
    end

  end

  # private

  # def question_params
  #   p params
  #   params.require(:question).permit(:title, :content)
  # end
end
