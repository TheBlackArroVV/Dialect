class AddTranscriptionToWords < ActiveRecord::Migration[5.1]
  def change
    add_column :words, :transcription, :string
  end
end
